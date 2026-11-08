#!/usr/bin/env node
// Adds a photo or a video to the slideshow of any room.
//   node scripts/add-media.js <room-id> <photo-or-video-file> ["caption"]
// With ffmpeg installed the file is optimised for the web and a preview picture is made; without it the file is copied as it is.
const fs = require("fs"), path = require("path"), { spawnSync } = require("child_process");
const root = path.join(__dirname, ".."), mediaDir = path.join(root, "public", "media"), roomsFile = path.join(root, "server", "rooms.js");
const [roomId, file, ...capParts] = process.argv.slice(2);
const rooms = require(roomsFile);
const ids = rooms.map(r => r.id).join(", ");
if (!roomId || !file) { console.log(`Usage: node scripts/add-media.js <room-id> <file> ["caption"]\nRoom ids: ${ids}`); process.exit(1); }
const room = rooms.find(r => r.id === roomId);
if (!room) { console.error(`Unknown room id "${roomId}". Choose one of: ${ids}`); process.exit(1); }
if (!fs.existsSync(file)) { console.error("File not found: " + file); process.exit(1); }
const ext = path.extname(file).toLowerCase(), video = [".mp4", ".mov", ".webm", ".m4v"].includes(ext), image = [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
if (!video && !image) { console.error("Use a .jpg, .png or .webp photo, or an .mp4, .mov, .webm or .m4v video."); process.exit(1); }
const ff = !spawnSync("ffmpeg", ["-version"]).error;
const run = args => spawnSync("ffmpeg", ["-v", "error", "-y", ...args]).status === 0;
fs.mkdirSync(mediaDir, { recursive: true });
const base = `${roomId}-${Date.now().toString(36)}`, caption = capParts.join(" ").trim() || (video ? "Video of " : "Photo of ") + room.name, item = { alt: caption };
const out = n => path.join(mediaDir, n), url = n => "/media/" + n;
if (video) {
  item.type = "video";
  if (ff && run(["-i", file, "-vf", "scale=w='min(1280,iw)':h=-2", "-c:v", "libx264", "-preset", "medium", "-crf", "28", "-maxrate", "900k", "-bufsize", "1800k", "-c:a", "aac", "-b:a", "64k", "-movflags", "+faststart", out(base + ".mp4")])) {
    item.src = url(base + ".mp4");
    if (run(["-ss", "1", "-i", out(base + ".mp4"), "-frames:v", "1", "-vf", "scale=720:-2", "-q:v", "3", out(base + "-poster.jpg")])) item.poster = url(base + "-poster.jpg");
    if (run(["-ss", "1", "-i", out(base + ".mp4"), "-frames:v", "1", "-vf", "scale=800:600:force_original_aspect_ratio=increase,crop=800:600", "-q:v", "4", out(base + "-t.jpg")])) item.thumb = url(base + "-t.jpg");
  } else { fs.copyFileSync(file, out(base + ext)); item.src = url(base + ext); console.log("ffmpeg was not found, so the video was copied as it is (no preview picture)."); }
} else if (ff && run(["-i", file, "-vf", "scale=w='min(1400,iw)':h=-2", "-q:v", "3", out(base + ".jpg")])) {
  item.src = url(base + ".jpg");
  if (run(["-i", file, "-vf", "scale=800:600:force_original_aspect_ratio=increase,crop=800:600", "-q:v", "4", out(base + "-t.jpg")])) item.thumb = url(base + "-t.jpg");
} else { fs.copyFileSync(file, out(base + ext)); item.src = url(base + ext); console.log("ffmpeg was not found, so the photo was copied as it is."); }
(room.photos = room.photos || []).push(item);
const header = fs.readFileSync(roomsFile, "utf8").split("\n").filter(l => l.startsWith("//")).join("\n");
fs.writeFileSync(roomsFile, header + "\nmodule.exports = " + JSON.stringify(rooms, null, 2) + ";\n");
console.log(`Added ${video ? "video" : "photo"} to "${room.name}" as slide ${room.photos.length}: ${item.src}\nRestart the server (npm start) to see it.`);

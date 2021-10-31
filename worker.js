addEventListener("scheduled", event => {
    event.waitUntil(handleScheduled(event))
})
  
async function handleScheduled(e) {
    await feedengagePostsKV.put("posts", "[]");
}
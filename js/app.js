const API = "https://ai-auto-uploader.onrender.com";

function uploadVideo() {
  const file = document.getElementById("video").files[0];
  if (!file) return alert("Select video");

  document.getElementById("loader").classList.remove("hidden");

  const form = new FormData();
  form.append("video", file);

  fetch(API + "/upload", { method:"POST", body:form })
    .then(r=>r.json())
    .then(d=>{
      document.getElementById("status").innerText = "✅ Uploaded & Deleted";
      document.getElementById("loader").classList.add("hidden");
    });
}

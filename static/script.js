// Handle document/text upload
document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData();
  const file = document.getElementById("file").files[0];
  const text = document.getElementById("text").value;

  if (file) {
    formData.append("file", file);
  }
  if (text.trim() !== "") {
    formData.append("text", text);
  }

  document.getElementById("uploadStatus").innerText = "⏳ Uploading...";

  try {
    const res = await fetch("/upload", { method: "POST", body: formData });
    const data = await res.json();
    if (res.ok) {
      document.getElementById("uploadStatus").innerText = "✅ " + data.message;
    } else {
      document.getElementById("uploadStatus").innerText = "❌ " + data.error;
    }
  } catch (err) {
    document.getElementById("uploadStatus").innerText = "⚠️ Error uploading data";
  }
});

// Handle asking questions
document.getElementById("askForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const question = document.getElementById("question").value;

  const spinner = document.getElementById("spinner");
  const answerText = document.getElementById("answerText");

  // Reset UI
  spinner.classList.remove("hidden");
  answerText.innerText = "";
  document.getElementById("sources").innerHTML = "";
  document.getElementById("runtime").innerText = "-";
  document.getElementById("tokens").innerText = "-";

  try {
    const res = await fetch("/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    spinner.classList.add("hidden");

    if (res.ok) {
      answerText.innerText = data.answer;
      document.getElementById("runtime").innerText = data.runtime;
      document.getElementById("tokens").innerText = data.tokens;

      data.sources.forEach((src) => {
        const li = document.createElement("li");
        li.innerText = src;
        document.getElementById("sources").appendChild(li);
      });
    } else {
      answerText.innerText = "❌ " + data.error;
    }
  } catch (err) {
    spinner.classList.add("hidden");
    answerText.innerText = "⚠️ Error fetching answer";
  }
});

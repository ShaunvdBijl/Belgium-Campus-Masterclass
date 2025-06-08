function askAI() {
    const question = document.getElementById("question").value;
    const responseDiv = document.getElementById("response");
  
    // Simulated AI response
    responseDiv.innerText = `🔍 Searching legal guidance for: "${question}"\n\nThis is a mock response. In a real app, an AI would provide guidance here.`;
  }
  
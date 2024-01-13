function formatText() {
    // Get the input text from the textarea
    var inputText = document.getElementById('inputText').value;

    // Remove extra spaces and create paragraphs
    var formattedText = inputText.replace(/\s+/g, ' ').trim().split('\n').map(paragraph => `<p>${paragraph.trim()}</p>`).join('');

    // Display the formatted text in the output div
    document.getElementById('outputText').innerHTML = formattedText;
}
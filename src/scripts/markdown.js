 // Initialize markdown-it
 const md = window.markdownit();

 // Function to parse markdown and render HTML
 function parseMarkdownToHTML(markdownText) {
     const html = md.render(markdownText);
     document.getElementById('htmlOutput').innerHTML = html;
 }

 // Parse markdown from JSON and render HTML
 const json = '{"markdown": "# Heading\\n\\n**Bold**"}'; // Replace with your JSON variable
 const parsedJson = JSON.parse(json);
 const markdownText = parsedJson.markdown;
 parseMarkdownToHTML(markdownText);
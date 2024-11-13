document.addEventListener('DOMContentLoaded', function() {
    const terminalContent = document.getElementById('terminal-content');
    const textToType = [
        "My name is Cesar Oswaldo Bernal Sanchez.<br><br>",
        "I'm a Backend Developer.<br><br>",
        "I enjoy programming in Java and C/C++.<br>",
        "I've also worked with embedded software, mainly using Arduino and C++. <br><br>",
        "Select an option:<br><br>",
        '<a href="https://www.linkedin.com/in/c%C3%A9sar-bernal-a9473924a/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a><br>',
        '<a href="https://github.com/Cesar-64bit" target="_blank"><i class="fab fa-github"></i> Github</a><br>',
        '<a href="/pdf/CV-Cesar-Bernal.pdf" target="_blank"><i class="fas fa-file"></i> CV</a><br>',
    ];

    let currentLine = 0;
    let charIndex = 0;

    function type() {
        if (currentLine < textToType.length) {
            const line = textToType[currentLine];
            if (charIndex < line.length) {
                terminalContent.innerHTML += line[charIndex++];
                setTimeout(type, 40);
            } else {
                terminalContent.innerHTML += '<br>';
                charIndex = 0;
                currentLine++;
                setTimeout(type, 400);
            }
        }
    }

    type();
});

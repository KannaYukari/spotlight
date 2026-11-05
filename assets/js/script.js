document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("search");
    const source = document.getElementById("source");
    const output = document.getElementById('result-content');

    source.addEventListener("input", function(event) {
        output.innerHTML = highlight(search.value, source.value);
    });
    
    search.addEventListener("input", function(event) {
        output.innerHTML = highlight(search.value, source.value);
    });

    function highlight(search, source) {
        if (!search) {
            return source;
        }

        const sourceTerms = source.split(" ");

        for (let i = 0; i < sourceTerms.length; i++) {
            if (sourceTerms[i].toLowerCase().startsWith(search.toLowerCase())) {
                sourceTerms[i] = "<mark>" + sourceTerms[i] + "</mark>";
            }
        }
        
        return sourceTerms.join(" ");
    }
});


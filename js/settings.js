(async () => {
    document.querySelectorAll('.toggle-button').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            localStorage.setItem(checkbox.id, e.currentTarget.checked && (checkbox.dataset.customcondition ? eval(checkbox.dataset.customcondition) : true));
            checkbox.checked = localStorage.getItem(checkbox.id) === "true";
        });

        const ls = localStorage.getItem(checkbox.id);
        checkbox.checked = ls !== null ? ls === "true" : checkbox.dataset.checked === "true";
        if (ls === null) localStorage.setItem(checkbox.id, checkbox.dataset.checked === "true");
    });
})();

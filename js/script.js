document.addEventListener('DOMContentLoaded', function() {
    const memberList = document.getElementById('member-list');
    memberList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const memberName = event.target.textContent;
            const excelView = document.getElementById('excel-view');
            excelView.innerHTML = '';
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `members/${memberName}.xlsx`, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function() {
                const uint8Array = new Uint8Array(this.response);
                const workbook = XLSX.read(uint8Array, {type: 'array'});
                const worksheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[worksheetName];
                const html = XLSX.utils.sheet_to_html(worksheet, {
                    cellStyles: true,
                    sheetwrap: true
                });
                excelView.innerHTML = html;
            };
            xhr.send();
        }
    });
});

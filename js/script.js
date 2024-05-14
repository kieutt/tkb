document.addEventListener('DOMContentLoaded', function() {
    loadGroups();
});

function loadGroups() {
    // Giả sử chúng ta có một mảng các nhóm
    var groups = ['Toán', 'Toán-Tin', 'Tin'];
    var groupList = document.getElementById('groupList');
    groupList.innerHTML = '';

    groups.forEach(function(group) {
        var button = document.createElement('button');
        button.textContent = group;
        button.onclick = function() { loadMembers(group); };
        groupList.appendChild(button);
    });
}

function loadMembers(groupName) {
    // Giả sử chúng ta có một đối tượng với các thành viên theo nhóm
    var members = {
        'Toán': ['Thành viên A', 'Thành viên B'],
        'Toán-Tin': ['Thành viên C', 'Thành viên D'],
        'Tin': ['Kiều', 'Thành viên F']
    };
    var memberList = document.getElementById('memberList');
    memberList.innerHTML = '';

    members[groupName].forEach(function(member) {
        var button = document.createElement('button');
        button.textContent = member;
        button.onclick = function() { loadExcel(member); };
        memberList.appendChild(button);
    });
}

function loadExcel(memberName) {
    // Giả sử mỗi thành viên có một URL tới tệp Excel của họ
    var excelFiles = {
        'Kiều': 'files/Kiều.xlsx',
        'Thành viên B': 'path/to/thanhvienB.xlsx',
        // và cứ thế...
    };
    var excelFile = document.getElementById('excelFile');
    excelFile.innerHTML = '';

    var iframe = document.createElement('iframe');
    iframe.src = excelFiles[memberName];
    excelFile.appendChild(iframe);
}

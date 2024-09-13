document.getElementById('editButton').addEventListener('click', function() {
    const formElements = document.querySelectorAll('#profileForm input, #profileForm textarea');
    formElements.forEach(element => {
        element.disabled = !element.disabled;
    });

    // เปลี่ยนข้อความปุ่มเป็น "บันทึก" เมื่อเปิดใช้งาน
    const editButton = document.getElementById('editButton');
    if (editButton.innerHTML.includes('แก้ไข')) {
        editButton.innerHTML = '<i class="fas fa-save"></i> บันทึก';
    } else {
        editButton.innerHTML = '<i class="fas fa-edit"></i> แก้ไข';
    }
});
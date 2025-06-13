document.addEventListener('DOMContentLoaded', function () {

    // ---- ข้อมูลสำหรับกราฟ (ปกติจะดึงมาจากฐานข้อมูล) ----
    const facultyData = {
        labels: ['วิศวกรรมศาสตร์', 'วิทยาศาสตร์', 'บริหารธุรกิจ', 'มนุษยศาสตร์', 'ศิลปกรรมศาสตร์', 'เกษตรศาสตร์', 'ศึกษาศาสตร์', 'นิติศาสตร์'],
        counts: [2500, 1800, 2200, 1500, 950, 1100, 800, 1300]
    };

    const genderData = {
        labels: ['ชาย', 'หญิง', 'อื่นๆ'],
        counts: [6854, 8320, 56]
    };


    // ---- สร้างกราฟแท่ง: จำนวนนักศึกษาตามคณะ ----
    const ctxFaculty = document.getElementById('facultyChart').getContext('2d');
    const facultyChart = new Chart(ctxFaculty, {
        type: 'bar',
        data: {
            labels: facultyData.labels,
            datasets: [{
                label: 'จำนวนนักศึกษา',
                data: facultyData.counts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(199, 199, 199, 0.7)',
                    'rgba(83, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)',
                    'rgba(83, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // ซ่อน legend เพราะมีป้ายกำกับแกน X บอกอยู่แล้ว
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            family: 'Sarabun'
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Sarabun'
                        }
                    }
                }
            }
        }
    });

    // ---- สร้างกราฟวงกลม: สัดส่วนเพศ ----
    const ctxGender = document.getElementById('genderChart').getContext('2d');
    const genderChart = new Chart(ctxGender, {
        type: 'pie',
        data: {
            labels: genderData.labels,
            datasets: [{
                data: genderData.counts,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 206, 86, 0.8)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                     labels: {
                        font: {
                            family: 'Sarabun'
                        }
                    }
                }
            }
        }
    });

});
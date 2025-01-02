// localStorage.clear()
const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "aa@aa.com",
        "password": "123",
        "taskNumber": 2,
        "taskStatus": {
            "active": 1,
            "new": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client Presentation",
                "taskDescription": "Prepare Q1 presentation for key client",
                "taskDate": "2025-01-10",
                "category": "Client Relations"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Report Analysis",
                "taskDescription": "Analyze monthly sales reports",
                "taskDate": "2024-12-31",
                "category": "Analysis"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Priya",
        "email": "sarah.smith@company.com",
        "password": "123",
        "taskNumber": 2,
        "taskStatus": {
            "active": 2,
            "new": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Project Planning",
                "taskDescription": "Create project timeline for new initiative",
                "taskDate": "2025-01-15",
                "category": "Planning"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Lead weekly team sync meeting",
                "taskDate": "2025-01-08",
                "category": "Meetings"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Rahul",
        "email": "mike.wilson@company.com",
        "password": "123",
        "taskNumber": 2,
        "taskStatus": {
            "active": 1,
            "new": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests for frontend changes",
                "taskDate": "2025-01-05",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Bug Fixes",
                "taskDescription": "Address reported bugs in production",
                "taskDate": "2025-01-12",
                "category": "Development"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Neha",
        "email": "lisa.jones@company.com",
        "password": "123",
        "taskNumber": 2,
        "taskStatus": {
            "active": 2,
            "new": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Review",
                "taskDescription": "Review new website designs",
                "taskDate": "2025-01-20",
                "category": "Design"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Asset Creation",
                "taskDescription": "Create marketing assets for campaign",
                "taskDate": "2025-01-25",
                "category": "Design"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Aditya",
        "email": "david.brown@company.com",
        "password": "123",
        "taskNumber": 2,
        "taskStatus": {
            "active": 1,
            "new": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Data Analysis",
                "taskDescription": "Analyze customer feedback data",
                "taskDate": "2025-01-18",
                "category": "Analysis"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Report Generation",
                "taskDescription": "Generate monthly analytics report",
                "taskDate": "2024-12-30",
                "category": "Reporting"
            }
        ]
    }
]
const admin = [
    {
        "id": 101,
        "email": "admin.one@company.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Security Protocols",
                "taskDescription": "Review and implement new security measures",
                "taskDate": "2025-01-15",
                "category": "Security"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "User Access Review",
                "taskDescription": "Conduct quarterly access permissions review",
                "taskDate": "2025-01-10",
                "category": "Administration"
            }
        ]
    },
    {
        "id": 102,
        "email": "admin.two@company.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Employee Training",
                "taskDescription": "Organize security training session",
                "taskDate": "2025-01-20",
                "category": "Training"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "System Maintenance",
                "taskDescription": "Perform monthly system updates",
                "taskDate": "2024-12-28",
                "category": "Maintenance"
            }
        ]
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}
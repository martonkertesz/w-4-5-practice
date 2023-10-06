const data = [
    {
        name: "Kovacs Janos",
        age: 29,
        subjects: [
            {
                subjectName: "Maths",
                subjectGrade: 5
            },
            {
                subjectName: "Physics",
                subjectGrade: 3
        },
        {
            subjectName: "English",
            subjectGrade: 2
        }
        ]
    }
    ame: "Lefold Elek",
        age: 91,
        subjects: [
            {
                subjectName: "Maths",
                subjectGrade: 2
            },
            {
                subjectName: "Physics",
                subjectGrade: 1
        },
        {
            subjectName: "English",
            subjectGrade: 5
        }
        ]
    }
]

for (let i = 0; i < data.length; i++) {
    console.log(data[i].name)
    
}

students.forEach(student =>  {
console.log(student.name)

student.subjects.forEach(subject => console.log(`${subject.subjectName}: ${subject.subjectGrade}`))
})

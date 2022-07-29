import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Agunlar: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPTO-0000',
                duration: 120,
                rating: 5,
                releaseDate: 'December, 2, 2021'
            },
            {
                id: 2,
                name: 'Agunlar: HTTP',
                imageUrl: '',
                price: 45.99,
                code: 'XPTO-0001',
                duration: 80,
                rating: 4.5,
                releaseDate: 'April, 3, 2022'
            }
        ]
    }

}
#include <vector>
using namespace std;

vector<int> gradingStudents(vector<int> grades) {
    // Grades are between 0-100 inclusive. Anything below 40 fails.
    // If the difference between grade and the next multiple of 5 is less than 3, round grade up to next multiple of 5.
    // If grade is less than 38, no rounding occurs and the result will still be a failing grade.
    // Return integer array with rounded grades.
    // First line is n, number of students.
    // Next line is grades array.

    for (int i = 0; i < grades.size(); i++)
    {
        if (grades[i] >= 38) {
            if (5 - grades[i] % 5 < 3) {
                grades[i] += (5 - grades[i] % 5);
            }
        }
    }
    return grades;
}
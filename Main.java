import java.util.Scanner;

class Student{
    private int id;
    private String name;
    private int [] marks;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int[] getMarks() {
        return marks;
    }
    public void setMarks(int[] marks) {
        this.marks = marks;
    }

    public double getTotalMarks(){
        double sum = 0;
        for(int i=0; i<marks.length; i++){
            sum = sum + marks[i];
        }

        return sum;
    }

    public void display(){
        System.out.println("id : " + id + "\tname: " + name + "\tmarks : " + getTotalMarks());
    }
}


class Batch{
    private String batchName;
    private Student [] students;

    public String getBatchName() {
        return batchName;
    }

    public void setBatchName(String batchName) {
        this.batchName = batchName;
    }
    public Student[] getStudents() {
        return students;
    }
    public void setStudents(Student[] students) {
        this.students = students;
    }

    public void getTopperDetails(){
        Student topper = students[0];

        for(int i=1; i<students.length; i++){
            Student cur = students[i];
            if(cur.getTotalMarks() > topper.getTotalMarks()){
                topper = cur;
            }
        }

        topper.display();
    }

    public void display(){
        System.out.println("Batch name: " + batchName);
        System.out.println("Total " + students.length + " details: ");
        for(int i=0; i<students.length; i++){
            students[i].display();
            System.out.println("------------");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        Batch batch = new Batch();
        System.out.print("Enter batch name: ");
        String batchName = in.nextLine();

        batch.setBatchName(batchName);

        System.out.print("Enter the number of students: ");
        int n = in.nextInt();

        Student [] stds = new Student[n];
        System.out.println("Enter "+ n + " students details:");
        for(int i=0; i<n; i++){
            System.out.println("Enter no. " + (i+1) + " Student details:");
            System.out.print("id: ");
            int id = in.nextInt();
            in.nextLine();

            System.out.print("Enter student name: ");
            String studentName = in.nextLine();

            System.out.println("Enter 6 subject marks:");
            int marks [] = new int[6];

            for(int j=0; j<marks.length; j++){
                marks[j] = in.nextInt();
            }

            Student student = new Student();


            student.setId(id);
            student.setName(studentName);
            student.setMarks(marks);

            stds[i] = student;
        }

        batch.setStudents(stds);


        batch.display();

        System.out.println("Topper of the batch");
        batch.getTopperDetails();
    }    
}

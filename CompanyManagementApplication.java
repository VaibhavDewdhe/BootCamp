import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Fields: empId, empName, designation, salary
class Employee {
    private int empId;
    private String empName;
    private String designation;
    private double salary;

    public Employee() {
    }

    public Employee(int empId, String empName, String designation, double salary) {
        this.empId = empId;
        this.empName = empName;
        this.designation = designation;
        this.salary = salary;
    }

    public int getEmpId() {
        return empId;
    }

    public void setEmpId(int empId) {
        this.empId = empId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}

// Fields: deptId, deptName, List<Employee> employees
class Department {
    private int deptId;
    private String deptName;
    private List<Employee> employees;

    public Department() {
    }

    public Department(int deptId, String deptName, List<Employee> employees) {
        this.deptId = deptId;
        this.deptName = deptName;
        this.employees = employees;
    }

    public int getDeptId() {
        return deptId;
    }

    public void setDeptId(int deptId) {
        this.deptId = deptId;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

}

// Fields: companyId, companyName, location, List<Department> departments
class Company {
    private int companyId;
    private String companyName;
    private String location;
    private List<Department> departments;

    public int getCompanyId() {
        return companyId;
    }

    public void setCompanyId(int companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<Department> getDepartments() {
        return departments;
    }

    public void setDepartments(List<Department> departments) {
        this.departments = departments;
    }

}

// Driver class
public class CompanyManagementApplication {
    static Scanner in = new Scanner(System.in);
    static Company c = new Company();

    public static void main(String[] args) {

        System.out.print("company Id: ");
        int id = in.nextInt();
        c.setCompanyId(id);

        in.nextLine();

        System.out.print("Company name: ");
        String name = in.nextLine();
        c.setCompanyName(name);

        System.out.print("company location: ");
        String location = in.nextLine();
        c.setLocation(location);

        List<Department> depts = new ArrayList<>();
        c.setDepartments(depts);
        
        while (true) {
            System.out.println("1. Add a new Department to a Company.\r\n" + //
                    "2. Add a new Employee to a specific Department.\r\n" + //
                    "3. Display all Departments of a Company.\r\n" + //
                    "4. Display all Employees of a Department.\r\n");

            System.out.print("Enter your choice: ");
            int choice = in.nextInt();

            switch (choice) {
                case 1:
                    depts.add(addNewDepartment());
                    break;

                case 2:
                    System.out.println("Department List: ");
                    for (int i = 0; i < depts.size(); i++) {
                        System.out.println(i + " : " + depts.get(i).getDeptName());
                    }

                    System.out.print(
                            "Enter the choice from above listed departments in which you want to add new employee: ");
                    int idx = in.nextInt();
                    Department selected = depts.get(idx);

                    Employee fresher = addNewEmployee();
                    selected.getEmployees().add(fresher);

                    break;

                case 11:
                    displayAllCompanyDetails();
                    break;
                case 0:
                    System.exit(0);
                default:
                    break;
            }
        }
    }

    public static Department addNewDepartment() {
        // taking input of Fields: deptId, deptName, List<Employee> employees
        System.out.print("Enter deptId: ");
        int id = in.nextInt();

        in.nextLine();

        System.out.print("Enter deptName");
        String name = in.nextLine();

        List<Employee> emps = new ArrayList<>();

        System.out.println("Enter the number of employees: ");
        int count = in.nextInt();

        for (int i = 0; i < count; i++) {
            Employee emp = addNewEmployee();
            emps.add(emp);
        }

        return new Department(id, name, emps);
    }

    public static Employee addNewEmployee() {// taking of Fields: empId, empName, designation, salary
        System.out.print("Enter employee id");
        int id = in.nextInt();

        in.nextLine();

        System.out.print("Enter Employee name");
        String name = in.nextLine();

        System.out.print("Enter Employee designation");
        String designation = in.nextLine();

        System.out.print("Enter employee salary");
        double salary = in.nextDouble();

        return new Employee(id, name, designation, salary);
    }

    public static void displayAllCompanyDetails() {
        System.out.println("Company name: " + c.getCompanyName());
        System.out.println("Company location: " + c.getLocation());

        for (Department dept : c.getDepartments()) {
            System.out.println("-------------------------");
            System.out.print("Department Name: " + dept.getDeptName());
            System.out.println("All employees: ");
            for (Employee emp : dept.getEmployees()) {
                System.out.println(emp.getEmpId() + ",\t" + emp.getEmpName() + ",\t" + emp.getDesignation() + ",\t"
                        + emp.getSalary());
            }
        }
    }
}

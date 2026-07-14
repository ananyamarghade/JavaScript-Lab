function showDepartment(){

    document.getElementById("dept").innerHTML=
    
    "<h3>Department Details</h3>"+
    "<p>Department : Computer Science & Engineering</p>"+
    "<p>Institute : Symbiosis Institute of Technology, Nagpur</p>";
    
    console.log("Department Details Displayed");
    
    }
    
function greet(){

    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let contact=document.getElementById("contact").value;
    let address=document.getElementById("address").value;
    let dob=document.getElementById("date").value;
        
    alert("Student Information Submitted Successfully!");
        
    console.table([
        {
            Name:name,
            Age:age,
            Contact:contact,
            Address:address,
            DOB:dob,
            Department:"CSE"
        }
        ]);
        
        console.log("Student Information Submitted");
        
        console.info("Record Added Successfully");
        
        console.warn("Demo Warning Message");
        
        console.error("Demo Error Message");
        
        console.time("Execution");
        console.timeEnd("Execution");
        
        }
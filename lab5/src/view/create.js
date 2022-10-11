init.view.createEmployee = {
    setupUI: function () {
      const saveBtn = document.forms['Employee'].commit; 
  
      //Employee.loadAll();
  
      saveBtn.addEventListener('click', init.view.createEmployee.handleSaveButtonClick);
    },
    handleSaveButtonClick: function () {
      const formElement = document.forms['Employee'];
      var ele=document.getElementsByName("atd");
      var el = document.getElementById("dept");
      var result = el.options[el.selectedIndex].value;
     
      const employee = {
        empid: formElement.empid.value,
        ename: formElement.ename.value,
        edate: formElement.edate.value,
        edepartment: result,
        status:ele  
      };
  
      Employee.create(employee);
      formElement.reset();
    },
  };
  
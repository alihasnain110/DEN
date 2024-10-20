function submitbtn(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form element
    var form = document.getElementById('main');

    // Check if the form is valid
    if (form.checkValidity()) {
        Swal.fire({
            title: "Are you sure?",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Submit it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Submitted!",
                    text: "Your form has been submitted.",
                    icon: "success"
                });
                // Here you can also proceed with form submission if needed
                // form.submit(); // Uncomment this line to actually submit the form
            }
        });
    } else {
        // Show validation error messages
        form.reportValidity(); // This will show default validation messages
    }
}

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="..\css\data-display.css">
        <title>TTMOE - Public Primary School Admission Form - Data</title>
    </head>
    <body>
        <div class="wrapper">
        <img src="..\img\crest.jpg" alt="CoA">
        <h1>Ministry of Education</h1>
        <p>Application for admission into a public primary school.</p>
            <section>
                <h2>Child and School Information</h2>
                <a href="../index.html">
                    <p>Back to Form</p>
                </a>
                <table>
                    <tr class="table-item">
                        <th>Name of school:</th>
                        <td> <?php echo $_POST["school-name"]; ?> </td>
                    </tr>
                    <tr class="table-item">
                        <th>Child First Name: </th>
                        <td> <?php echo $_POST["child-firstname"]; ?> </td>
                    </tr>
                    <tr class="table-item">
                        <th>Child Surname: </th>
                        <td> <?php echo $_POST["child-surname"]; ?> </td>
                    </tr>
                    <tr class="table-item">
                        <th>Child Other Names: </th>
                        <td> <?php echo $_POST["child-othernames"]; ?> </td>
                    </tr>
                    <tr class="table-item">
                        <th>Child Gender: </th>
                        <td> <?php echo $_POST["child-gender"]; ?> </td>
                    </tr>
                    <tr class="table-item">
                        <th>Child Religion: </th>
                        <td> <?php echo $_POST["child-religion"]; ?> </td>
                    </tr>
                    <tr class="table-item">
                        <th>Child Date of Birth: </th>
                        <td> <?php echo $_POST["child-dob"]; ?> </td>
                    </tr>
                    <tr class="table-item">
                        <th>Child Birth Certificate Pin: </th>
                        <td> <?php echo $_POST["child-pin"]; ?> </td>
                    </tr>
                    <tr class="table-item">
                        <th>Child Address: </th>
                        <td> <?php echo $_POST["child-address"]; ?> </td>
                    </tr>
                    <tr class="table-item">
                        <th>Child Immunized: </th>
                        <td> <?php echo $_POST["child-immunized"]; ?> </td>
                    </tr>
                    <tr class="table-item">
                        <th>Child Nationality: </th>
                        <td> <?php echo $_POST["child-nationality"]; ?> </td>
                    </tr>
                    <tr class="table-item">
                        <th>Student Permit: </th>
                        <td> <?php echo $_POST["student-permit"]; ?> </td>
                    </tr>
                </table>
            </section>  
            <section>
                <h2>Parents / Guardian Information</h2>
                <table>
                    <h3>Parent / Guardian 1</h3>
                    <tr>
                        <th>Relationship to Child: </th>
                        <td> <?php echo $_POST["pg1-relationship"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Parent / Guardian Name: </th>
                        <td> <?php echo $_POST["pg1-name"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Parent / Guardian Contact Number: </th>
                        <td> <?php echo $_POST["pg1-contact"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Parent / Guardian Address: </th>
                        <td> <?php echo $_POST["pg1-address"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Parent / Guardian Email: </th>
                        <td> <?php echo $_POST["pg1-email"]; ?> </td>
                    </tr>
                </table>
                <table>
                    <h3>Parent / Guardian 2</h3>
                    <tr>
                        <th>Relationship to Child: </th>
                        <td> <?php echo $_POST["pg2-relationship"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Parent / Guardian Name: </th>
                        <td> <?php echo $_POST["pg2-name"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Parent / Guardian Contact Number: </th>
                        <td> <?php echo $_POST["pg2-contact"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Parent / Guardian Address: </th>
                        <td> <?php echo $_POST["pg2-address"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Parent / Guardian Email: </th>
                        <td> <?php echo $_POST["pg2-email"]; ?> </td>
                    </tr>
                </table>
            </section>
            <section>
                <h2>Sibling Information</h2>
                <p><b>Are there siblings enrolled at the applying school? :</b> <?php echo $_POST["legacy-siblings"]; ?> </p> 
                </tr>
                <table>
                    <h3>Sibling 1:</h3>
                    <tr>
                        <th>Sibling Name:</th>
                        <td> <?php echo $_POST["sibling-1-name"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Sibling Class:</th>
                        <td> <?php echo $_POST["sibling-1-class"]; ?> </td>
                    </tr>
                </table>
                <table>
                    <h3>Sibling 2:</h3>
                    <tr>
                        <th>Sibling Name:</th>
                        <td> <?php echo $_POST["sibling-2-name"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Sibling Class:</th>
                        <td> <?php echo $_POST["sibling-2-class"]; ?> </td>
                    </tr>
                </table>
                <table>
                    <h3>Sibling 3:</h3>
                    <tr>
                        <th>Sibling Name:</th>
                        <td> <?php echo $_POST["sibling-3-name"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Sibling Class:</th>
                        <td> <?php echo $_POST["sibling-3-class"]; ?> </td>
                    </tr>
                </table>
            </section>
            <section>
                <h2>Information Declaration</h2>
                <table>
                    <h3>Applicant Declaration</h3>
                    <tr>
                        <th>Applicant Name: </th>
                        <td> <?php echo $_POST["applicant-name"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Applicant Relation to Child: </th>
                        <td> <?php echo $_POST["applicant-relation"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Applicant Child: </th>
                        <td> <?php echo $_POST["applicant-child"]; ?> </td>
                    </tr>
                    <tr>
                        <th>Declaration: </th>
                        <td> <?php echo $_POST["agreement"]; ?> </td>
                    </tr>
                </table>
            </section>
            <p><b>End of form.</b></p>      
        </div>
    </body>
</html>


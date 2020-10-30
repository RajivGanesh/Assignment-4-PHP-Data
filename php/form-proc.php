<?php
                if (isset($_POST['submit-btn'])){
                    // <!-- Child data -->
                    $school-name = $_POST["school-name"];
                    $child-surname = $_POST["child-surname"];
                    $child-firstname = $_POST["child-firstname"];
                    $child-othernames = $_POST["child-othernames"];
                    $child-gender = $_POST["child-gender"];
                    $child-religion = $_POST["child-religion"];
                    $child-dob = $_POST["child-dob"];
                    $child-pin = $_POST["child-pin"];
                    $child-address = $_POST["child-address"];
                    $child-immunized = $_POST["child-immunized"];
                    $child-nationality = $_POST["child-nationality"];
                    $student-permit = $_POST["student-permit"];
                    // <!-- Parent / Guardian data -->
                    $pg1-relationship = $_POST["pg1-relationship"];
                    $pg1-name = $_POST["pg1-name"];
                    $pg1-contact = $_POST["pg1-contact"];
                    $pg1-address = $_POST["pg1-address"];
                    $pg1-email = $_POST["pg1-email"];
                    $pg2-relationship = $_POST["pg2-relationship"];
                    $pg2-name = $_POST["pg2-name"];
                    $pg2-contact = $_POST["pg2-contact"];
                    $pg2-address = $_POST["pg2-address"];
                    $pg2-email = $_POST["pg2-email"];
                    // <!-- Siblings data -->
                    $legacy-siblings = $_POST["legacy-siblings"];
                    $sibling-1-name = $_POST["sibling-1-name"];
                    $sibling-1-class = $_POST["sibling-1-class"];
                    $sibling-2-name = $_POST["sibling-2-name"];
                    $sibling-2-class = $_POST["sibling-2-class"];
                    $sibling-3-name = $_POST["sibling-3-name"];
                    $sibling-3-class = $_POST["sibling-3-class"];
                    // <!-- Declaration data -->
                    $applicant-name = $_POST["applicant-name"];
                    $applicant-relation = $_POST["applicant-relation"];
                    $applicant-child = $_POST["applicant-child"];
                    $agreement = $_POST["agreement"];
                }
            ?>
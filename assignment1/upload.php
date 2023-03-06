<!Doctype html>
<html lang="en">
    <head></head>
    <body>
        <?php
        function validate_input($data){
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }

        if(isset($_POST['submit'])){
            if(!empty($_POST['fullname'])){
                $fullname = validate_input($_POST['fullname'])
                ;
            }
            if(!empty($_POST['email'])){
                $email = validate_input($_POST['email']);
            }
            if(!empty($_POST['password'])){
                $password = validate_input($_POST['password']);
            }
            if(!empty($_POST['gender'])){
                $gender = validate_input($_POST['gender']);
            }
            if(!empty($_POST['address1'])){
                $address1 = validate_input($_POST['address1']);
            }
            if(!empty($_POST['address2'])){
                $address2 = validate_input($_POST['address2']);
            }
            if(!empty($_POST['city'])){
                $city = validate_input($_POST['city']);
            }
            if(!empty($_POST['county'])){
                $county = validate_input($_POST['county']);
            }
        }
        $servername = "10.140.42.235";
        $username = "CL";
        $password = "password";
        $port = "3307";
        $database = "CL_db_3";
        $conn = mysqli_connect($servername, $username, $password, $database, $port);
        if(mysqli_connect_errno()){
            echo "Failed to connnect to MySQL " . mysqli_connect_error();
            exit();
        }
        else{
            $sql = "insert into home (fullname, email, password, gender, address1, address2, city, country)
                VALUES ('$fullname', '$email', '$password', '$gender', '$address1', '$address2', '$city', '$county' )";
            if(mysqli_query($conn, $sql)){
                echo "Data added successfully :";
            }
            else{
                echo "Unable to add data at this time :" . mysqli_errno($conn);
            }
        }
        mysqli_close($conn);
        ?>
    </body>
</html>
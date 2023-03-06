<!Doctype html>
<html>
    <body>
        <?php
        $servername = "10.140.42.235";
        $username = "CL";
        $password = "password";
        $database = "";
        $port = "3307";

        $conn = mysqli_connect($servername, $username, $password, $database, $port);
        if(mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
        }else{
        echo "Connection successful";}
        
        $sql = "CREATE DATABASE CL_db_3";
        if(mysqli_query($conn, $sql)) {
            echo "Database created successfully";
        }else{
            echo "Error creating database" . mysqli_error($conn);
        }

        mysqli_select_db($conn, "CL_db_3");
        $result = mysqli_query($conn, "SELECT DATABASE()");
        $row = mysqli_fetch_row($results);
        printf("connected to database is %s.<br>", $ros[0]);

        $sql = "CREATE TABLE home (
            id INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            fullname VARCHAR(30) NOT NULL,
            email VARCHAR(50) NOT NULL,
            password VARCHAR(20) NOT NULL,
            gender VARCHAR(10) NOT NULL,
            address1 VARCHAR(30) NOT NULL,
            address2 VARCHAR(30) NOT NULL,
            city VARCHAR(30) NOT NULL,
            country VARCHAR(30) NOT NULL,
            reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )";

        if(mysqli_query($conn, $sql)){
            echo "Table home created successfully";
        }else{
            echo "Error creating table: " . mysqli_error($conn);
        }
        ?>
    </body>
</html>
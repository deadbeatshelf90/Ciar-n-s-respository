<!Doctype html>
<html lang="en">
    <body>
        <table align = "left" border = "1" cellpadding = "3" cellspacing = "0">
        <?php
            $servername = "10.140.42.235";
            $username = "CL";
            $password = "password";
            $port = "3307";
            $database = "CL_db_3";
            $conn = mysqli_connect($servername, $username, $password, $database, $port);
            if(mysqli_connect_errno()){
                echo "Failed to connnect to MySQL " . mysqli_connect_error();
                exit(); 
            }else{
                $sql = "SELECT * FROM home" ;
                $results = $conn->query($sql);
            }
            if($results->num_rows > 0){
                echo "<tr><th>ID</th><th>Fullname</th><th>E-mail</th><th>Password</th><th>Gender</th><th>House Number</th><th>Town</th><th>City</th><th>County</th></tr>";
                while($row = $results->fetch_assoc()){
                    echo "<tr>";
                    echo "<td>".$row["id"]."</td>";
                    echo "<td>".$row["fullname"]."</td>";
                    echo "<td>".$row["email"]."</td>";
                    echo "<td>".$row["password"]."</td>";
                    echo "<td>".$row["gender"]."</td>";
                    echo "<td>".$row["address1"]."</td>";
                    echo "<td>".$row["address2"]."</td>";
                    echo "<td>".$row["city"]."</td>";
                    echo "<td>".$row["country"]."</td>";
                    echo "</tr>";
                }
                
            }
            else{
                echo "0 results";
            }
        $conn->close();
        ?>
        </table>
    </body>
</html>
<!-- https://www.w3schools.com/php/php_mysql_select.asp -->
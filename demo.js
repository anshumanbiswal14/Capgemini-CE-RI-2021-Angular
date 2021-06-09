<html>

<head>
    <script>
        function fun() {
            var country_list = ["ENGLAND", "US", "India", "Sri Lanka", "Nepal"];
            var country = document.getElementById("country").value;
            if (country_list.includes(country)) {
                var ul = document.getElementById("mylist");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(country));
                ul.appendChild(li)
                document.getElementById("error").style.visibility="hidden";
            }
            else{
                alert("Enter a country name from this list \"ENGLAND\", \"US\", \"India\", \"Sri Lanka\", \"Nepal\"")
              document.getElementById("error").style.visibility="visible";
            }
        }
    </script>
</head>

<body>
    <input type="text" placeholder="Enter country name" id="country" />
    <input type="button" value="Add country" onclick="fun()" />
    <div id="error" style="visibility: hidden;">
        <p style="color: red;"> Please enter a valid county</p>
    </div>
    <div>
        <ul id="mylist">
        </ul>
    </div>
</body>

</html>
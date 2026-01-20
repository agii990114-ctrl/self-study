import mariadb

try:
    conn = mariadb.connect(
        user="kimjihwan",
        password="jihwan",
        host="192.168.0.9",
        port=23306,
        database="edu"
    )
    print(conn, type(conn))

except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")

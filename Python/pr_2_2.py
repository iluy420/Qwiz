import sqlite3
import string

def in_base (cursor):
    list_staff=[(1,'Костиков','1977-02-05','Специалист'),(2,'Рой','1977-11-15','Специалист'),(3,'Пестов','1975-11-11','Председатель ПЦК'),(4,'Ожигова','1976-07-24','Специалист')]
    cursor.executemany("INSERT INTO staff VALUES (?,?,?,?)", list_staff)
    database.commit()


def create_tab_staff(cursor):
  #  cursor.execute('''CREATE TABLE staff (tab_n INT, f_name TEXT, l_name TEXT, p_name TEXT, position TEXT, key_dep INT)''')
    cursor.execute('''CREATE TABLE staff (tab_n INT, f_name TEXT, date_on TEXT, position TEXT)''')


def del_row(cursor,n1):
    cursor.execute("DELETE FROM staff WHERE n= ?", (n1))
    database.commit()

def print_base(cursor):
    cursor.execute("SELECT * FROM staff ORDER BY f_name")
    results=cursor.fetchall()
    for row in results:
        print(row)
  
def in_row(cursor):
    new_name=input("Введите фамилию: ")
    new_DoB=input("Введите дату рождения в формате YYYY-MM-DD: ")
    new_spec=input("Введите должность: ")
    cursor.execute("SELECT Count(*) FROM staff")
    count = cursor.fetchone()
    new_n = count[0]+1 
    cursor.execute("INSERT INTO staff VALUES (new_n,new_name,new_DoB,new_spec)")

def up_base(cursor):
    old_name=input("Введите старую фамилию: ")
    new_name=input("Введите новую фамилию: ")
    cursor.execute("UPDATE staff SET f_name= :new_name1 WHERE f_name= :old_name1 ",{"new_name1": new_name,"old_name1":old_name})
    database.commit()

database=sqlite3.connect('file.db')
sql_request=database.cursor()

#create_tab_staff(sql_request)
#in_base(sql_request)
print_base(sql_request)
#del_row(sql_request,'1')
#up_base(sql_request)
in_row(sql_request)

print_base(sql_request)

database.close()



import os
import sys

def hello(hello):
    print(hello)

def read(file):
    newfile = open(file,'r',encoding='utf-8')
    userMessage = []
    for line in newfile:
        if line.find('username=') != -1 and line.find('password=') != -1:
            username = line.split('username=')[1].split("password")[0].split("\"")[1]
            password = line.split('password=')[1].split("role")[0].split("\"")[1]
            userMessage.append(
                {
                    'name': username,
                    'passwd': password
                }
            )
    print(userMessage)

def write(file, newuser):
    newuserName = newuser['name']
    newuserPasswd = newuser['passwd']
    newline = "  <user username=\"" + newuserName + "\" password=\"" + newuserPasswd + "\" roles=\"admin\"/>" + "\n"
    userMessages = []
    tomcat = open(file,'r',encoding='utf-8')
    # with open(file,"rt",encoding='utf-8') as f:
        # tomcat = str(f.readline())
    for line in tomcat:
        userMessages.append(line)
    userMessages.insert(-4,'\n')
    userMessages.insert(-4,newline)
    # print(userMessages)

    newtomcat = open(file,'w',encoding='utf-8')
    for line in userMessages:
        newtomcat.writelines(line)
    newtomcat.close()

if __name__ == "__main__":
    if sys.argv[1] == "read":
        read('tomcat-users.xml')
    elif sys.argv[1] == "write":
        # inputStr = '{"name":"wzj","passwd":"1234"}'
        inputStr = eval(sys.argv[2])
        write('tomcat-users.xml',inputStr)
    else:
        print("Please input right message!")
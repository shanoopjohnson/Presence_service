# Presence_service
user presence with firebase authentication

UI PAGES:
=> LOGIN PAGE : * Contains a login layout with Username and Password fields.

=> MAIN PAGE : * Shows current user avatar (hover over to see Username and email id of the user)
               * Contains two buttons Show Past Visitors and Logout
               * Show Past Visitors: Display past registered Users data - UNAME, LOGIN_TIME, LAST_ACCESSED_TIME
               * Logout : Redirects to initial Login Page(ends current session)
               
BACK-END FUNCTIONALITY:
=> LOGIN PAGE : * Authenticate the user (using database)
                * All fields are required to be filled.
                *Pre registered users in Firebase Authenticator are allowed
                
                usename:          password:
                john@gmail.com    johnjohn
                leena@gmail.com   leenaleena
                shanu@gmail.com   shanushanu
                
=> MAIN PAGE : * Display Current User avatar 
               * Hover over avatar - tooltip with uname and email_id
               * Records Login Time and Last accessed Time(time at which last request is sent by user before session overs ie. before logout) of User
               * On click "Show past Visitors" : Data fetched from database and displayed in tabular form
               
DATABASES:

=> MEMBERS : EMAIL_ID  VARCHAR(45),
             PASSWORD  VARVHAR(45)

=> PAST_VIEWERS : UNAME              VARCHAR(45),
                  LOGIN_TIME         VARCHAR(45),
                  LAST_ACCESSED_TIME VARVHAR(45)

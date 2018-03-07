# Overview

Being a proficient reader by the 3rd grade is important milestone for students. 3rd grade is the time when students transition from learning to read - to reading to learn. For students from low-income communities often don’t have access to enough books at home to spend the time with books that they need to become readers. The Obama administration started an initiative to access the publishing rights to open thousands of books to be free and open for students in Title 1 schools (low-income communities). With the administration change, I wanted to contribute open-source code to the project that is geared towards younger readers. Also students in younger grades who are just learning to read don’t just need titles, they need help with reading and to get regular feedback on their reading to become strong readers.

ReadToMe is an app the contains a bookshelf for young readers and allows them to get feedback about how they are reading aloud. Readers can select a book and read. They can also record themselves reading and get feedback about how accurate their reading matched the selected text. ReadToMe is a javascript application built with React, Redux and Router and utizlizes the Watson Natural Language Api for transcription. I also built a node.js express server and websocket for real-time audio streaming. I am in the process of user and A/B testing with a 3rd grade classroom in Denver to refine the user experience, feedback about reading, and point system for young readers. 

## UI

![screen shot 2018-03-07 at 10 19 00 am](https://user-images.githubusercontent.com/24358415/37107350-58fbc85e-21f1-11e8-889f-fe47b200a912.png)

![screen shot 2018-03-07 at 10 22 33 am](https://user-images.githubusercontent.com/24358415/37107408-80842204-21f1-11e8-9d39-3587fb391aa3.png)

![screen shot 2018-03-07 at 10 20 16 am](https://user-images.githubusercontent.com/24358415/37107426-87d08bd8-21f1-11e8-9d98-82afad90574f.png)


## Installation

Clone down repo and run `npm install`

Clone down node.js express backend and run on a separate port: https://github.com/wagasky/expressBackend

## Resources

Made with Create React App


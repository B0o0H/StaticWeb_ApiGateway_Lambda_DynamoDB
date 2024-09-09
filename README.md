# StaticWeb_ApiGateway_Lambda_DynamoDB
Small project to integrate static website with AWS services - API Gateway, Lambda and DynamoDB


## Static Webpage
This webpage is used to submit customers' orders
<p align="center">
  <img src="https://github.com/user-attachments/assets/73bf814a-9aab-46e3-8265-ae11b5d91875" alt="Webpage" width="300" />
</p>

After customer fills the form and click 'Submit Order', it will shows 'Order submitted successfully' under the button.
<p align="center">
  <img src="https://github.com/user-attachments/assets/085866c8-f3b6-4092-a9ae-20a874803243" alt="Webpage" width="300" />
</p>
Then, the order will be sent to AWS DynamoDB via AWS API Gateway and Lambda.
<p align="center">
  <img src="https://github.com/user-attachments/assets/7b90d8d1-3bd9-45c2-8ff3-7098e3db0bee" alt="Webpage" width="300" />
</p>


## Setup

### Pre-requistes
- AWS account 
- server to host webpage or use VScode extension - Live Server
### IAM
- Go to IAM console
- Create policy for lambda to have permission to interact with DynamoDB
  - Use `` policy.json `` to create the policy 
- Create role for lambda and attach created policy to it
  - Choose AWS Service and select Lambda
  - Attach created policy to the role
    - Make sure you change ``Region`` ``Account`` ``Table_name`` to your case
   
### Lambda
- Go to Lambda console
- Create a function and attach the created role for it
- Copy ``sendData.py`` and paste it into the function


### API Gateway
- Go to API Gateway console
- TBC

### DynamoDB
- TBC

### SNS
- TBC
Each time a order is submitted, someone should receive the message.
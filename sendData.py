import json
import boto3
from datetime import datetime

# Initialize the DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Orders')  # Replace 'Orders' with your DynamoDB table name

def lambda_handler(event, context):
    print(event)
    try:
        # Parse the JSON body from the event
        body = json.loads(event['body'])

        # Prepare the item to be inserted into DynamoDB
        item = {
            'orderId': datetime.now().isoformat(),  # Using ISO format for a unique order ID
            'name': body['name'],
            'email': body['email'],
            'product': body['product'],
            'quantity': int(body['quantity']),
            'message': body['message']
        }

        # Put the item into the DynamoDB table
        table.put_item(Item=item)

        # Return a success response
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Order submitted successfully!'})
        }

    except Exception as e:
        # Print the error and return a failure response
        print(e)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Could not process order'})
        }

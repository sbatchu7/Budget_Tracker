
import json

def lambda_handler(event, context):
    transactions = event['transactions']
    categorized_transactions = categorize_transactions(transactions)
    return {
        'statusCode': 200,
        'body': json.dumps(categorized_transactions)
    }

def categorize_transactions(transactions):
    categories = {}
    for tx in transactions:
        category = tx.get('category', 'Uncategorized')
        if category not in categories:
            categories[category] = 0
        categories[category] += tx['amount']
    return categories

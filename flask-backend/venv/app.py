from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_data():
    # Get the data from the POST request
    data = request.json
    print(len(data["data"]))

    # Check if the request contains 10 inputs
    if len(data["data"]) != 10:
        return jsonify({"error": "Please provide 10 inputs"}), 400

    # Process the data (in this example, we just return the data)
    processed_data = {
        "input1": data["data"][0],
        "input2": data["data"][1],
        "input3": data["data"][2],
        "input4": data["data"][3],
        "input5": data["data"][4],
        "input6": data["data"][5],
        "input7": data["data"][6],
        "input8": data["data"][7],
        "input9": data["data"][8],
        "input10": data["data"][9]
    }

    # Return the processed data as JSON
    return jsonify(processed_data)

if __name__ == '__main__':
    app.run(debug=True)

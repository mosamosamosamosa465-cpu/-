# Python Flask Backend لمعالجة الفورم
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit_form():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # هنا يمكن تخزين البيانات في قاعدة بيانات أو إرسالها للإيميل
    print(f"رسالة جديدة من {name} ({email}): {message}")

    # إرسال رد للعميل
    return jsonify({"status": "success", "message": "تم إرسال رسالتك بنجاح!"})

if __name__ == '__main__':
    app.run(debug=True)

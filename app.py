from flask import Flask, render_template, request

app = Flask(__name__, template_folder='templates')
	
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
	name=request.form['name']
	mail=request.form['mail']
	msg=request.form['msg']
	return 'name is: '+ name +' mail is:'+ mail +' message is '+ msg




if __name__ == '__main__':
    app.run(debug=True)

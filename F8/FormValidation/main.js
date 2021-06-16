function Validator(options) {
    function Validate(inputElement, rule){
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        inputElement.parentElement.classList.add('invalid');
                    }
                    else {
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove('invalid');
                    }
    }

    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.form-message');
            if (inputElement) {
                // Xử lí trường hợp blur khỏi input
                inputElement.onblur = function() {
                    Validate(inputElement, rule);
                }

                // Xử lí mỗi khi nhập vào
                inputElement.oninput = function() {
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

// rule
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này!';
        }
    };
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        }
    };
}

Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : `Mật khẩu phải có tối thiểu ${min} kí tự`;
        }
    };
}



// Config
Validator({
    form: '#form-1',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#fullname'),
        Validator.isEmail('#email'),
        Validator.minLength('#password', 6),
    ]
});
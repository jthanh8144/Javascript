function Validator(options) {
    var selectorRules = {};

    function Validate(inputElement, rule){
        var errorMessage;
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var rules = selectorRules[rule.selector];

        for (var i = 0; i < rules.length; i++) {
            errorMessage =  rules[i](inputElement.value);
            if (errorMessage) break;
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
        return !errorMessage;
    }

    var formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = Validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });
            if (isFormValid) {
                // Submit với js
                if (typeof options.onsubmit === 'function') {
                    var enableInputs = formElement.querySelector('[name]:not([disabled])');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        return (values[input.name] = input.value) && values;
                    }, {});
                    options.onsubmit(formValues);
                }
                // Submit với html
                else {
                    // formElement.submit();
                }
            } else {
                
            }
        }

        options.rules.forEach(function(rule) {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
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
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này!';
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

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : `${message} phải có tối thiểu ${min} kí tự`;
        }
    };
}

Validator.isConfirmed = function(selector, getRePass, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getRePass() ? undefined : `${message} không khớp!`
        }
    }
}

// Config
Validator({
    form: '#form-1',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#fullname', 'Vui lòng nhập họ tên!'),
        Validator.isRequired('#email'),
        Validator.isEmail('#email'),
        Validator.isRequired('#password'),
        Validator.minLength('#password', 6, 'Mật khẩu'),
        Validator.isRequired('#re-password'),
        Validator.isConfirmed('#re-password', function() {
            return document.querySelector('#form-1 #password').value;
        }, 'Mật khẩu')
    ],
    onsubmit: function(data) {
        // Call API
        console.log(data);
    }
});
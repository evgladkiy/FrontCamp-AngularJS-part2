const textareaValidator = () => ({
        require: 'ngModel',
        link: function (scope, element, attributes, control) {
            control.$validators.textareaValidator = (modelValue) => (
                control.$isEmpty(modelValue) ||
                modelValue.length >= Number(attributes.textareaValidator)
            );
        },
});

export default textareaValidator;

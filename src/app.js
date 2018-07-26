import 'jquery';
import {add} from './modules/addItem';
import {remove} from './modules/removeItem';
import './styles/appStyles.scss';

$('#add-btn').on('click', function () {
	let item = $('input[name="addNew"]');
	onchange(item);
});

$('#remove-btn').on('click', function () {
	removeItem();
})



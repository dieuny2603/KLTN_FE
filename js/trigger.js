//Add Suat chieu
$('#btnAddSC').on('click', () => {
    var htmlObj = document.getElementById('form-addSC');
    htmlObj.innerHTML = htmlObj.innerHTML + '<div class="lc-suatchieu">	<div class="">		<label for="">Suất chiếu</label>		<select id="" name="" class="select-pc">			<option value="">9:00</option>			<option value="">12:00</option>		<option value="">20:00</option>		</select>	</div>	<div class="">		<label for="">Rạp</label>		<select id="room" name="room" class="select-pc">			<option value="1">CINEMA 1</option>			<option value="2">CINEMA 2</option>			<option value="3">CINEMA 3</option>		</select>	</div></div>';
})
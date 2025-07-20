function Addtodo() {
    return (
        <div class="container text-center">
            <div class="row kg-row">
                <div class="col-6">
                    <input type="text" placeholder="Enter tasks here" />
                </div>
                <div class="col-4">
                    <input type="date" />
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-primary kg-btn">Add</button>
                </div>
            </div>
        </div>
    );
}
export default Addtodo;
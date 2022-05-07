<?php
class Controller{
    public $load;
    public $model;
    
	function __construct($pageMethod = null)
	{
		// echo $pageURI;
		$this->load = new Load();
		$this->model = new Model();
		// Determine what page you are on
		$this->$pageMethod();
	}

	function home()
	{
		$this->load->view("viewCocaCola");
	}
	function apiCocaCola()
	{
		$this->load->view('viewCocaCola');	
	}
}
?>
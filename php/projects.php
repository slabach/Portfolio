<?php

class Project{    
    private $conn;
    // Properties
    public $projTitle;
    public $projLink;
    public $projTech;
    public $projTimeFrame;
    public $projImg;
    public $output;   

    public function __construct($db) {
        $this->conn = $db;
    }

    public function __toString() {
        return $this->projTitle;
        return $this->projLink;
        return $this->projTech;
        return $this->projTimeFrame;
        return $this->projImg;
        return $this->output;
      }

    // Get projects
    public function readAll() {
        // Create query
        $query = 'SELECT * FROM `PROJECTS`';
        // Prepare statement
        $stmt = $this->conn->prepare($query);
        // Execute query
        $stmt->execute();
        return $stmt;
    }

    public function set_Prop($properties) {
        foreach ($properties as $key => $value) {
            $this->$key = $value;
        }
    }

    public function getOutput()
    {
        $this->output = "<div class='projectDisplay'>";
        $this->output .= "<a href='".$this->projLink."' target='_blank'><img src='".$this->projImg."'></a>";
        $this->output .= "<h1 class='projTitle'>".$this->projTitle."</h1>";
        $this->output .= "<h4 class='projTimeFrame'>".$this->projTimeFrame."</h4>";
        $this->output .= "<h3 class='projTech'>".$this->projTech."</h3>";
        $this->output .= "</div>";

        return $this->output;
    }

}

function getProjects(){

    // Instantiate DB & connect
    $database = new db();
    $db = $database->connect();
    // Instantiate project object
    $project = new Project($db);
    // Project read query
    $result = $project->readAll();

    // Get row count
    $num = $result->rowCount();
    // Check if any projects
    if($num > 0) {

        while($row = $result->fetchAll(PDO::FETCH_ASSOC)) {
            // extract($row);

            foreach($row as $projItem){
                $project->set_Prop(array(
                    'projTitle' => $projItem["PROJ_TITLE"],
                    'projLink' => $projItem["LINK"],
                    'projTech' => $projItem["TECHNOLOGIES"],
                    'projTimeFrame' => $projItem["TIMEFRAME"],
                    'projImg' => $projItem["IMG_PATH"]                    
                ));

                echo $project->getOutput();
            }
        }
        
    } else {
        // No Categories
        echo json_encode(
            array('message' => 'No Projects Found')
        );
    }
    
}
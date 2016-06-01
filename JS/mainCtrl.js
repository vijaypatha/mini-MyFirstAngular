angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.name = "Tyler";
  $scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];

  function addFriend(){
    $scope.friends.push($scope.addFriends);
  }

  $scope.addFriend = addFriend;
//adding addFriend funtion to scope ****


});

// create a function in your controller called 'addFriend' that takes in a name of
//another friend and pushes it to your friends array. In your index.html you'll need an input box that will be
//the name of your friend, and a button that will run $scope.addFriend every time it is clicked

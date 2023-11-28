function skillsMember(){
    return{
    restrict: 'E',
    templateUrl: 'directives/member.html',
    controller: 'SkillsMemberCtrl',
    controllerAs: 'memberCtrl',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}
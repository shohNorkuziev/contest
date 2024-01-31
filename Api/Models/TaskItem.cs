using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

    public class TaskItem
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public bool IsCompleted { get; set; }
        [Required]
        public int ThemeTaskId { get; set; }
        
        [ForeignKey("ThemeTaskId")]
        public ThemeTask ThemeTask { get; set; }

        [Required]
        public int UsersId{get;set;}

        [ForeignKey("UsersId")]

        public Users Users{get;set;}
    }

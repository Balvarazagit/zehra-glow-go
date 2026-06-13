using System.ComponentModel.DataAnnotations;

namespace ZehraGlowApi.Models
{
    public class Booking
    {
        [Key]
        public int Id { get; set; }

        public string BookingNumber { get; set; } = "";

        public string Name { get; set; } = "";

        public string Phone { get; set; } = "";

        public string Service { get; set; } = "";

        public string Address { get; set; } = "";

        public DateTime Date { get; set; }

        public string Time { get; set; } = "";

        public string Notes { get; set; } = "";

        public string Status { get; set; } = "pending";

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
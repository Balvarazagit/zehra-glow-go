using Microsoft.AspNetCore.Mvc;
using ZehraGlowApi.Data;
using ZehraGlowApi.Models;

namespace ZehraGlowApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BookingsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetBookings()
        {
            return Ok(_context.Bookings.ToList());
        }

        [HttpPost]
        public IActionResult CreateBooking(Booking booking)
        {
            booking.BookingNumber =
                $"ZG{DateTime.Now:yyyyMMddHHmmss}";

            booking.Status = "pending";

            _context.Bookings.Add(booking);
            _context.SaveChanges();

            return Ok(new
            {
                message = "Booking created successfully",
                bookingId = booking.BookingNumber,
                data = booking
            });
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBooking(int id)
        {
            var booking = _context.Bookings.Find(id);

            if (booking == null)
            {
                return NotFound();
            }

            _context.Bookings.Remove(booking);
            _context.SaveChanges();

            return Ok();
        }

        [HttpPatch("{id}/status")]
        public IActionResult UpdateStatus(int id, [FromBody] StatusUpdateDto model)
        {
            var booking = _context.Bookings.Find(id);

            if (booking == null)
                return NotFound();

            booking.Status = model.Status;

            _context.SaveChanges();

            return Ok(booking);
        }

        [HttpGet("track/{bookingNumber}")]
        public IActionResult TrackBooking(string bookingNumber)
        {
            var booking = _context.Bookings
                .FirstOrDefault(x => x.BookingNumber == bookingNumber);

            if (booking == null)
                return NotFound();

            return Ok(booking);
        }

    }
}